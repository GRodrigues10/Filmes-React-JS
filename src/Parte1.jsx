import React from 'react';
import logo from './assets/Logonetflix.png'; // Caminho relativo correto
import pipoca from './assets/pipoca.png';

function Parte1() {
    return (
        <>
            <section className='seção1'>

                <div className='aba-geral'>
                    <div className='aba'>
                        <img src={logo} alt="Logo Netflix" />
                    
                    </div>
                    <div className='aba2'>
                    <select className='select'>
                            <option value="">Português</option>
                            <option value="">English</option>
                        </select>
                        <button className='btn-entrar'>Entrar</button>
                    </div>
                </div>


                <div className='conteúdo-central'>
                    <h1>
                    Filmes, séries e muito mais, sem limites
                    </h1>
                    <p>Assista onde quiser. Cancele quando quiser.</p>
                    <p className='p2'>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                    <div className='c1'>
                        <form action="" className='form1'>
                            <input type="email" name="" id="" placeholder='Email' required></input>
                            <button type='submit'>Vamos Lá &gt; </button>
                        </form>
                    </div>
                </div>
                
                
            </section>
            
                    <div className='fundo'>
                        <div className='pipoca'>
                        
                            <div className='texto-pipoca'>
                        
                                <p className='texto1'>A Netflix que você adora por apenas R$ 20,90.</p>
                                <div className='texto-pipoca2'>
                                    <p className='texto2'>Assine o plano Padrão com anúncios.</p>
                                    <a href="#">Saiba Mais &gt;</a>
                                </div>
                            </div>
                            <img src={pipoca} alt="Imagem de Pipoca" />
                                          
                                    </div>
                    </div>
           

        </>
    );
}

export default Parte1;