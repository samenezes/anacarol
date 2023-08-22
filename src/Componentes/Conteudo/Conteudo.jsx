import './Conteudo.css'


function Conteudo() {

    var tab = document.querySelector('#tabela')
     var a = []

    fetch( 'https://opentdb.com/api.php?amount=30&category=19').then((response) => {
        return response.json()
    }).then((result) => {
        for(var i = 0; i < result.length; i++){
            a.push(result[i])
        }
        renderizar()
        console.log(a)
    })

    function renderizar(){
        var b = `
        <tr> 
            <th>Categoria</th>
            <th>Resposta</th>
        </tr>
        `

        a.forEach((aItem, index) => {
            if (aItem != ''){
                b += `
                <tr>
                <td> ${aItem.category} </td>
                <td> ${aItem.correct_answer} </td>
                </tr>
                `
            }
        })
        tab.innerHTML = b
    }

    return (
      <>
        <div className="conteudo">
           <table className="tabelaa" id="tabela">

            </table> 
        </div>
      </>
    )
  }
  
  export default Conteudo