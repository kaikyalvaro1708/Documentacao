======================= Tipos de dados e Variáveis ============================

============== Tipos de Dados
1 - int (Inteiros): É usado para representar números inteiros. Em geral, tem tamanho de 4 bytes

Ex:
int count = 10;

2- float e double (Ponto Flutuante): São usados para representar números com parte decimal. float tem precisão menor que double. double geralmente ocupa 8 bytes

Ex:
float pi = 3.14159;
double distance = 123.456789;

3- char(Caracteres): Armazena um único caractere. O tamanho é de 1 byte.

Ex:
char grade = 'A';

4 - char (Códigos ASCII): Os caracteres também podem ser representados por seus códigos ASCII.

Ex:
char letterA = 65; // Representa o caractere 'A' na tabela ASCII

5 - short e long (inteiros com tamanhos diferentes): short é menor que 'int' e 'long' é maior que 'int'. O tamanho varia dentro da plataforma.

Ex:
short smallNumber = 100;
long bigNumber = 1000000L;


=============================== MODIFICADORES DE TIPO ========================
'signed' e 'unsigned'(Sinal e Sem Sinal): signed permite números inteiros positivos e negativos, enquanto unsigned permite apenas números positivos. Usados com tipos inteiros.


================================== VARIÁVEIS ==================================
1 - As variáveis devem ser declaradas antes de serem usadas. A declaração especifica o nome da variável e o tipo de dado que ela armazenará.

Ex:
int age; // Declaração
age = 25; // Atribuição


2 - Atribuição de Valores: Após a declaração, você pode atribuir um valor à variável.

Ex:
float temperature = 98.6;

3 - Inferência de Tipo ('auto'): Em algumas situações, você pode usar 'auto' para permitir que o compilador deduza automaticamente o tipo de variável.

Ex:
auto speed = 100 // O compilador inferirá o tipo (int)


============================ CONSTANTE =====================================
Além de variáveis, você também pode usar constantes para armazenar valores que não mudam durante a execução do programa. Elas são definidas com a palavra-chave const.

Ex:
const double pi = 3.14159;

============================ TAMANHO DE TIPOS ================================
O tamanho dos tipos de dados em C pode variar dependendo da plataforma e do compilador. Você pode usar sizeof para determinar o tamanho em bytes de um tipo ou variável.

Ex:
int size = sizeof(int); //Tamanho de um int em bytes


=================================== PRINTF ==================================
Para printf, também, existem diferentes marcadores de posição para cada tipo:

 %c  para caracteres
 %f  para flutuadores, duplos
 %i  para ints
 %li  para longos
 %s  para strings
 