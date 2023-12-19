/* SI PUò FARE NEI COMPONENTI A FUNZIONE  */

/* POSSO DESTRUTTURARE IL PARAMETRO PROPS PER NON DOVERLO RISCRIVERE OGNI VOLTA NEI SUOI CHILDREN E INSERIRE DIRETTAMENTE DOVE MI SERVE IL NOME DEL PARAMETRO */

/* PER DESTRUTTURARE NON DIMENTICARE LE GRAFFE INTORNO AI PARAMETRI!! */

const RandomComponent = ({ content_h2, content_p, content_h2_2, content_p_2 }) => {
    return (
        <>
            <aside>
                <div>
                    <h2>{content_h2}</h2>
                    <p>{content_p}</p>
                </div>
                <div>
                    <h2>{content_h2_2}</h2>
                    <p>{content_p_2}</p>
                </div>
            </aside>
        </>
    );
};

// SAREBBE LA STESSA COSA CHE SCRIVERE:
/* const RandomComponents = (props) => {
   return (
       <>
           <aside>
               <div>
                   <h2>{props.content_h2}</h2>
                   <p>{props.content_p}</p>
               </div>
               <div>
                   <h2></h2>
                   <p></p>
               </div>
           </aside>
       </>
   );
}; */

export default RandomComponent;
