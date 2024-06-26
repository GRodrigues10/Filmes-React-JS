import tv from './assets/tv-netflix.png';
function Parte2(){
    return(<>
        <section className="seção2">
            <div className="part1">
                <h1>Aproveite na TV</h1>
                <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
            <div className="tv">
                <img src={tv} alt="Imagem de TV" />
            </div>
          
        </section>

        </>
        
    );
}

export default Parte2;