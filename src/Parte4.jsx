import kids from './assets/kids.png'
function Parte4(){
    return(
        <>
        <section className="seção4">
        <div className="part1">
            <h1>Crie perfis para crianças</h1>
            <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
        </div>

        <div className="kids">
            <img src={kids} alt="imagem kids netflix" />
        </div>
        </section>
        </>

    );
}

export default Parte4;