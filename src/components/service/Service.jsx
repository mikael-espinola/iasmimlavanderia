import React from "react"
import Main from "../template/Main"
import "./Service.css"

import Cesto from "../../assets/img/cestoDeRoupas.png"
import Unidade from "../../assets/img/pecasPoucas.png"
import Social from "../../assets/img/roupasocial_resized.png"

export default props =>
    <Main>
        <div className="display-9">Confira nossos serviços:</div>
        <hr />
        <div className="cards">

            <section className="card">
                <div className="icon">
                    <img src={Cesto} alt="Cesto" />
                </div>
                <h3>Cesto de Roupas</h3>
                <span>Pacote com 25 unidades</span>
                <span className="preco-de">R$ 140,00</span>
                <span className="preco-por">R$ 95,90</span>
                <a href="https://api.whatsapp.com/send/?phone=558422260500" target="_blank"><button>Entre em
                    contato!</button></a>
            </section>

            <section className="card">
                <div className="icon">
                    <img src={Unidade} alt="Unidade" />
                </div>
                <h3>Roupas avulsas</h3>
                <span>Lavangem de roupas unitária</span>
                <span className="preco-de">R$ 18,99</span>
                <span className="preco-por">R$ 9,90</span>
                <a href="https://api.whatsapp.com/send/?phone=558422260500" target="_blank"><button>Entre em
                    contato!</button></a>
            </section>

            <section className="card">
                <aside className="icon">
                    <img src={Social} alt="Social" />
                </aside>
                <h3>Peças especiais</h3>
                <span>Lavangem de roupas unitária</span>
                <span className="preco-de">R$ 120,00</span>
                <span className="preco-por">R$ 92,90</span>
                <a href="https://api.whatsapp.com/send/?phone=558422260500" target="_blank"><button>Entre em
                    contato!</button></a>
            </section>

        </div >
    </Main >