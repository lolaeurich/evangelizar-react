import vela from "../assets/areaLogada/vela.png"

const VelaUnica = ({vela}) => {
    const { cidade, titulo, descricao} = vela

    return (
        <div className="box1-vela2">
                        <div className="metade1">
                            <div className="parte1">
                                <img alt="" className="parte1-img" src={vela}/>
                                <div className="parte1-text">
                                    <h5 className="parte1-h5">{cidade}</h5>
                                    <h4 className="parte1-h4">{titulo}</h4>
                                </div>
                            </div>

                            <p className="citacao">{descricao}</p>

                            <div className="editar">
                                <div className="editar-vela">
                                    <img alt className="vela-edit" src={caneta}/>
                                    <p className="editar-p">Editar vela</p>
                                </div>

                                <div className="editar-vela">
                                    <img alt className="vela-edit" src={trash}/>
                                    <p className="editar-p">Excluir vela</p>
                                </div>
                            </div>
                        </div>

                        <div className='metade2'>

                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                            </label>

                            </div>

                    </div>
    )

}

export default VelaUnica