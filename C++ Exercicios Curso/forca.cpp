#include <iostream>
#include <stdlib.h>

using namespace std;

int main(){
    
    char palavra[30], letra[1], secreta[30];
    int tam, i, chances, acertos;
    bool acerto;
    
    chances = 6;
    tam = 0;
    i = 0;
    acerto = false;
    acertos = 0;
    
    cout << "Fale para seu amigo tampar os olhos e digite a palavra secreta:";
    cin >> palavra;
    system("cls");

    while(palavra[i] != '\0'){ //enquanto a palavra no indice i for diferente de \0
        i++; // aqui aumentamos o indice para percorrer toda a palavra
        tam++; // aqui aumentamos em 1 a variavel tamanho pela quantidade de char que tem a palavra
    }
    
    for (i = 0;i < 30; i++){ //aqui percorremos toda a variavel secreta e colocamos 30 "-"
        secreta[i] = '-';
    }

    while((chances > 0) && (acertos < tam)){ //enquanto chance for diferente de 0 e acertos for menor que tam
        cout << "Chances restantes: " << chances << "\n\n";
        cout << "Palavra secreta: ";

        for(i = 0; i < tam; i++){//aqui exibimos a variavel secreta pelo tamanho da variavel tam
            cout << secreta[i];
        }

        cout << "\n\nDigite uma letra: ";
        cin >> letra[0]; //colocamos a letra digitada no indice 0 da variavel letra

        for(i = 0; i < tam; i++){ //percorremos x vezes
            if(palavra[i] == letra[0]){ //se a palavra percorrida no indice for igual a letra no indice 0
                acerto = true; // acerto  se torna true
                secreta[i] = palavra [i]; // secreta no mesmo indice se torna a palavra no mesmo indice
                acertos++; // incrementamos acerto
            }
        }
        if(!acerto){ //se acerto false
            chances--; //decrementamos a variavel chances
        }

        acerto = false;
        system("cls");
    }
    
    if (acertos == tam){
        cout << "Você venceu!";
    }else{
        cout << "Que pena você perdeu!";
    }
    
    system("pause");
    
    return 0;   
}