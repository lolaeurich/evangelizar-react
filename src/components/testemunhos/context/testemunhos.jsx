import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TestemunhosContext = createContext({
    testemunhos: [],
    inserirTestemunho: () => null,
    editarTestemunho: () => null,
    excluirTestemunho: () => null
});

export const TestemunhosProvider = ({ children }) => {
    const [testemunhos, setTestemunhos] = useState([]);

    useEffect(() => {
        fetchTestemunhos();
    }, []);

    const fetchTestemunhos = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/testemunho', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTestemunhos(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar velas:', error);
        }
    };

    const inserirTestemunho = async (testemunho) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('https://arearestritaevangelizar.belogic.com.br/api/testemunho', testemunho, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await fetchTestemunhos(); // Atualiza o estado local após adição
        } catch (error) {
            console.error('Erro ao adicionar vela:', error);
        }
    };

    const editarTestemunho = async (testemunhoAtualizado) => {
        try {
            const token = localStorage.getItem('token');
            const { id } = testemunhoAtualizado;
            // console.log('Dados a serem enviados para a API (editar):', testemunhoAtualizado); // Verifique os dados antes de enviar
            const response = await axios.put(
                `https://arearestritaevangelizar.belogic.com.br/api/testemunho/${id}`,
                testemunhoAtualizado,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            console.log('Resposta da API (editar):', response.data); // Verifique a resposta da API
    
            if (response.data.success) {
                console.log(`Testemunho ${id} atualizada com sucesso!`);
                await fetchTestemunhos(); // Atualiza o estado local após edição
            } else {
                console.error(`Erro ao atualizar testemunho ${id}: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Erro ao editar testemunho:', error);
        }
    };
    
    
    
    

    const excluirTestemunho = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`https://arearestritaevangelizar.belogic.com.br/api/testemunho/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            await fetchTestemunhos(); // Atualiza o estado local após exclusão
        } catch (error) {
            console.error('Erro ao excluir vela:', error);
        }
    };

    const value = {
        testemunhos,
        inserirTestemunho,
        editarTestemunho,
        excluirTestemunho
    };

    return (
        <TestemunhosContext.Provider value={value}>
            {children}
        </TestemunhosContext.Provider>
    );
};
