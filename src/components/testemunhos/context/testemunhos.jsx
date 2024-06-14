import {createContext, useState, useEffect} from "react";
import crypto from 'crypto'
import axios from "axios";


export const TestemunhosContext = createContext({
    testemunhos: [],
    inserirTestemunho: () => null,
    editarTestemunho: () => null,
    excluirTestemunho: () => null
})


export const TestemunhosProvider = ({children}) => {

    const [testemunhos, setTestemunhos] = useState([
        // {
        //     anonimo:  false,
        //     atencaoCheck: false,
        //     cidade: "1",
        //     descricao: "1",
        //     id: "1717957293401",
        //     titulo: "1"
        // }
    ])

    const headers = {
        authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    console.log(headers)

    const fetchTestemunhos = async () => {
        const { data } = await axios.get('https://arearestritaevangelizar.belogic.com.br/api/testemunho', 
            {
                headers: {
                'authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTE5MjE3YzgxNWU4OTc2Y2FmMGRkZGE4Y2EyYTFlYmI0NGJlOGI4NDUzMTE5Mzg1ZGI0M2M2YmFmNzliYjliZTY1MGVjZDZkNmNkNGRiZDUiLCJpYXQiOjE3MTgxMTA1OTIuMDAxMDQsIm5iZiI6MTcxODExMDU5Mi4wMDEwNDIsImV4cCI6MTc0OTY0NjU5MS45OTc4NDcsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.WfLku-xGv1WdP88cqoZ-MVsGemHTroAyHc3y4XZYzi4_KmaVuKpkAkNOmpxWKRa4gvb-DgtsIHvKzIPNPCx-NO_EnIjom01JIISBXbBaRquRfC0AFpDU5lFsSuiXYcVa8RS_FmDTcUL903_B4nNsN6Tj3CQyQicQ32Kv181KOyLntakxL2Yuxje96-JwQAvBYr55cNPUHG9Dwcb6-tj6brxsCEa_X4L7zm1mJMt4k5NCaEu-RW6c9Yv5eUn50HFlFZ5kuSoiGk363J_eKG58_3LiKB1u5VsaTjWG7K2GoEJvG8-wTn3u0_D7j7eaXWFoxg-Aovaj_f8dW7QoLhU3tISFmhkyOLXRIrjVcr-6LM2vyrLo9igVhe9qZXfUgHkfji2tjpex3pA8dinrgZryWvDE-pbLy33e-OFJBvaeHRty9LG7VeRTszC2s2Rd5UJwKsNX0BWeo5ndXt8jqhuG8SlGUxiHy2x_iReA-3Ux0seqwnpAgdc2NZRdZ-mKIIlBBeUzyIPbf2dixzHTJOkkzlbhEoT9jnbZuO3U3SZcZfOLhy6jZovuE_Tb3kaGXR1Aca-CbCrZ46_KhplYpe1AIhOeoxvPiUHRChCs7j5hCx8yLzxWzYA8bmVHI0dXZ_Ca3056PTfPfXer13y6yjYbt6W6WvHCwgbApg5b5-5nNXc" ,
            }
            }) 
        setTestemunhos(data.data)
    }

    useEffect(() => {
        fetchTestemunhos()
    }, [])

    useEffect(() => {
        console.log('testemunhos', testemunhos);
    }, [testemunhos])



    const inserirTestemunho = async (testemunho) => {
        console.log(testemunho)

        const { data } = await axios.post('https://arearestritaevangelizar.belogic.com.br/api/testemunho', testemunho, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        await fetchTestemunhos();
    }

    const editarTestemunho = async (testemunho) => {
        const { data } = await axios.put(`https://arearestritaevangelizar.belogic.com.br/api/testemunho/${testemunho.id}`, testemunho, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log('data', data)

        const testemunhosTmp = testemunhos.filter(testemunho => testemunho.id !== testemunho.id)
        // setVelas([...velasTmp, vela])
        await fetchTestemunhos();
    }

    const excluirTestemunho = async (id) => {
        const testemunhosTmp = testemunhos.filter(testemunho => testemunho.id !== id)
        const { data } = await axios.delete(`https://arearestritaevangelizar.belogic.com.br/api/testemunho/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(data)
        // setVelas(velasTmp)
        await fetchTestemunhos();
    }
    
    const value = {
        testemunhos,
        inserirTestemunho,
        editarTestemunho,
        excluirTestemunho
    }

    return (
        <TestemunhosContext.Provider value={value}>
            {children}
        </TestemunhosContext.Provider>
    )
}
 