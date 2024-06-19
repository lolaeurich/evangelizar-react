import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VelasContext = createContext({
    velas: [],
    inserirVela: () => null,
    editarVela: () => null,
    excluirVela: () => null
});

export const VelasProvider = ({ children }) => {
    const [velas, setVelas] = useState([]);

    useEffect(() => {
        fetchVelas();
    }, []);

    const fetchVelas = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/vela', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setVelas(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar velas:', error);
        }
    };

    const inserirVela = async (vela) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('https://arearestritaevangelizar.belogic.com.br/api/vela', vela, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await fetchVelas(); // Atualiza o estado local após adição
        } catch (error) {
            console.error('Erro ao adicionar vela:', error);
        }
    };

    const editarVela = async (velaAtualizada) => {
        try {
            const token = localStorage.getItem('token');
            const { id } = velaAtualizada;
            const response = await axios.put(
                `https://arearestritaevangelizar.belogic.com.br/api/vela/${id}`,
                velaAtualizada,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (response.data.success) {
                console.log(`Vela ${id} atualizada com sucesso!`);
                await fetchVelas(); // Atualiza o estado local após edição
            } else {
                console.error(`Erro ao atualizar vela ${id}: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Erro ao editar vela:', error);
        }
    };

    const excluirVela = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`https://arearestritaevangelizar.belogic.com.br/api/vela/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            await fetchVelas(); // Atualiza o estado local após exclusão
        } catch (error) {
            console.error('Erro ao excluir vela:', error);
        }
    };

    const value = {
        velas,
        inserirVela,
        editarVela,
        excluirVela
    };

    return (
        <VelasContext.Provider value={value}>
            {children}
        </VelasContext.Provider>
    );
};
