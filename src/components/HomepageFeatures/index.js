import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import animationData1 from "../../../static/img/animation_llwmdo27.json";
import animationData2 from "../../../static/img/animation_llwn24rw.json";
import animationData3 from "../../../static/img/animation_llwp4p9b.json";

const FeatureList = [
  {
    description: (
      <>
        <div class="container">
          <Lottie animationData={animationData1} style={{width: '100%',height: '200px'}}/>
          <div class="services">
            <div style={{textAlign: "center"}}>
              <h3>Manutenção de Celulares</h3>
            </div>
            <ul>
              <li>Reparos Rápidos e Precisos</li>
              <li>Substituição de Bateria</li>
              <li>Substituição de Tela</li>
              <li>Atualização de Software</li>
              <li>Soluções para hardware e software</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    description: (
      <>
        <div class="container">
      <Lottie animationData={animationData2} style={{width: '100%',height: '200px'}}/>
          <div class="services">
            <div style={{textAlign: "center"}}>
              <h3>Criação de Sites Personalizados</h3>
            </div>
            <ul>
              <li>Design Moderno e Intuitivo</li>
              <li>Layout Responsivo</li>
              <li>Integração de Mídias Sociais</li>
              <li>SEO Básico para Melhor Visibilidade</li>
              <li>Manutenção Contínua e Suporte Técnico</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    description: (
      <>
        <div class="container">
          <Lottie animationData={animationData3} style={{width: '100%',height: '200px'}}/>
          <div class="services">
            <div style={{textAlign: "center"}}>
              <h3>Manutenção de Computadores</h3>
            </div>
            <ul>
              <li>Diagnóstico e Resolução de Problemas</li>
              <li>Otimização de Desempenho</li>
              <li>Limpeza de Hardware e Software</li>
              <li>Remoção de Vírus e Malware</li>
              <li>Atualização de Software e Drivers</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

function Feature({ description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <img src={require('@site/static/img/discovery.png')} alt="my image" /> */}
      <div className="text--center"></div>
      <div className="padding-horiz--md">
        {/* <h3>{title}</h3> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
