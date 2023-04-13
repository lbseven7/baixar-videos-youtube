# baixar-videos-youtube

# Get Vídeos

Este projeto consiste em pegar vídeos do YouTube com JavaScript usando a API do YouTube Data para obter informações sobre um vídeo específico, incluindo seu ID, título, descrição, thumbnail e outras informações.


## Instalação

Instale o Get videos com npm
### Download do projeto
```
git clone git@github.com:lbseven7/baixar-videos-youtube.git

cd baixar-videos-youtube/

code .

npm install

code .

npm start
```

    
## Referência

 - [Console de APIs do Google](https://console.developers.google.com/)
 - [React](https://create-react-app.dev/)



## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item pelo seu id

```http
  GET `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



## Aprendizados

- usar a API do Google

 Desafios...
- No inicio do projeto, não sabia exatamente como começar. Entretanto depois de muitas pesquisas consegui iniciar. Testei várias soluções e pesquisando um pouco mais consegui "o caminho feliz" que era fazer o video ser exposto na página. Depois disso, foi só estilizar (inacabado).

## FAQ
### Posso adicionar mais de um vídeo?

Sim. Quando vocẽ obtém o primeiro vídeo, pode digitar um novo id e obter mais vídeos que serão exposto no formato de lista.

### Onde encontro o Id do vídeo?
 Ao final da url do vídeo você encontrará uma sequencia de 11 caracteres logo depois do sinal de '=' neste formato: (sSkmBxsaJWg). É este o id do vídeo. Basta digitar ou colar no input e o seu vídeo será exposto na tela.
## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de leodevcode@gmail.com

