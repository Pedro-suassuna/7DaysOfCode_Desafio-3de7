const area = prompt(`Deseja seguir para a área de "Front-End" ou "Back-End"?`);

if (area == "Front-End"){
    const libraryFront = prompt(`Quer aprender "React" ou "Vue"?`);

    const choiceFront = prompt(`Digite "Especializar" caso queira continuar se especializando no Front-End ou digite "Avançar" caso queria seguir estudos para se tornar um Fullstack.`);

    if(choiceFront == "Especializar"){
        technologies = prompt(`Em qual outra tecnologia deseja se especializar? (digite uma)`);

        var moreTechnologies = prompt(`Digite "ok" se deseja aprender mais alguma tecnologia.`);

        if(moreTechnologies == "ok"){
            var moreTechnologies = prompt(`Qual outra tecnologia deseja se especializar`);
        
            while (moreTechnologies != ""){
                alert(`Tecnologia ${moreTechnologies} adicionada`);
                var moreTechnologies = prompt(`Qual outra tecnologia deseja se especializar? (deixe em branco se não deseja adicionais mais nenhuma)`);

                if(moreTechnologies == ""){
                    alert("Recebemos suas respostas. Obrigado!"); 
                }
            }

        }else{
            alert("Recebemos suas respostas. Obrigado!");
        }
    }
}

if(area == "Back-End") {
    const libraryBack = prompt(`Quer aprender "C#" ou "Java"?`);

    const choiceBack = prompt(`Digite "Especializar" caso queira continuar se especializando no Back-End ou digite "Avançar" caso queria seguir estudos para se tornar um Fullstack.`);

    if(choiceBack == "Especializar"){
        technologies = prompt(`Em qual outra tecnologia deseja se especializar? (digite uma)`);

        var moreTechnologies = prompt(`Digite "ok" se deseja aprender mais alguma tecnologia.`);

        if(moreTechnologies == "ok"){
            var moreTechnologies = prompt(`Qual outra tecnologia deseja se especializar`);
        
            while (moreTechnologies != ""){
                alert(`Tecnologia ${moreTechnologies} adicionada`);
                var moreTechnologies = prompt(`Qual outra tecnologia deseja se especializar? (deixe em branco se não deseja adicionais mais nenhuma)`);

                if(moreTechnologies == ""){
                    alert("Recebemos suas respostas. Obrigado!"); 
                }
            }

        }else{
            alert("Recebemos suas respostas. Obrigado!");
        }
    }
}