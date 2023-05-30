import styles from './styles.module.css'

export const AboutMe = () => {
    return (
        <section className={styles.container}>
            <div className={styles.sectionTitle}>
                <h1 className={styles.title2}>Sobre mim</h1>
            </div>
            <p className={styles.descriptionAboutMe} id="sobre">   "        Com uma sólida trajetória de mais de 26 anos como Gerente de Loja no comércio varejista, decidi embarcar em uma emocionante mudança de carreira para a área de desenvolvimento Full Stack Web. Graduado em Análise e Desenvolvimento de Sistemas pela renomada Universidade União Educacional, Cultura e Tecnológica Impacta, e atualmente aprimorando minhas habilidades na Kenzie Academy Brasil, estou determinado a me tornar um desenvolvedor Full Stack altamente qualificado. Com expertise em liderança e gestão, estou pronto para colaborar em projetos desafiadores e complexos. Minha capacidade de lidar com pressão e cumprir prazos, desenvolvida ao longo da minha carreira como Gerente de Loja, é um trunfo valioso para o sucesso na área de tecnologia. Estou animado para continuar minha jornada de aprendizado e contribuir com equipes de tecnologia inovadoras."
            </p>
        </section>
    )
}