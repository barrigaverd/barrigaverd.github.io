#Primeira aula da Semana do Python

##Comando print()

print("Imersão semana do python");
print("Eu vou ser especialista em python");

##Entrada de dados do usuário - comando input()

##input("Digite a descrição do projeto:");
##input("Digite a quantidade de horas previstas:");

##Armazenar dados em uma variável

descricao_projeto = input("Digite a descrição do projeto:");
horas_previstas = input("Digite a quantidade de horas previstas:");
valor_hora = input("Digite o valor da hora trabalhada:");
prazo = input("Digite o prazo estimado:");

print(descricao_projeto);

###Tipos de dados - texto(str), numericos(int) - type()
###converter texto pra numero - str()
###Converter numero pra texto - int()

## Realizando cálculos com python

valor_total = int(horas_previstas) * int(valor_hora);

print(valor_total);

##Gerando o orçamento

##!pip install fpdf
from fpdf import FPDF

#criando um pdf
pdf = FPDF()

pdf.add_page()
pdf.set_font("Arial")
pdf.image("./template.png", x=0, y=0);

pdf.text(115, 145, descricao_projeto);
pdf.text(115, 160, horas_previstas);
pdf.text(115, 175, valor_hora);
pdf.text(115, 190, prazo);
pdf.text(115, 205, str(valor_total));


pdf.output("Orçamento.pdf");
print("Orçamento gerado com sucesso!");