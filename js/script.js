// Inserisci il codice qui
var app = new Vue(
  {
    el: '#zapp',
    data: {
      contacts: [
        {
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [{
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'received'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'received'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'sent'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Luisa',
            avatar: 'img/avatar_4.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '10/01/2020 15:30:45',
                message: 'Ciao',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Samantha',
            avatar: 'img/avatar_5.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Chiara',
            avatar: 'img/avatar_6.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Clelia',
            avatar: 'img/avatar_7.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              }
            ],
            indexLast: 2
        },
        {
            name: 'Alessio',
            avatar: 'img/avatar_8.jpg',
            visible: true,
            colorActive: 'bgwhite',
            messages: [
              {
                date: '10/01/2020 15:30:45',
                message: 'Ciao',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
            ],
            indexLast: 2
        },
      ],
      indexCount: 0,
      newMessage: "",
      ultimoAccesso: dayjs().format("HH:mm:ss")
    },
    methods: {
      indexActive: function(index) {
        this.indexCount = index;
      },
      addMessage: function(indexCount) {
        this.contacts[indexCount].messages.push(
          {
            date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
            message: this.newMessage,
            status: 'sent'
          }
        );
        this.newMessage = "";
        this.contacts[indexCount].indexLast += 1;
        setTimeout(() => {
            this.contacts[indexCount].messages.push(
              {
                date: dayjs().format("DD-MM-YYYY HH:mm:ss"),
                message: 'Ok',
                status: 'received'
              }
            );
            this.contacts[indexCount].indexLast += 1;
        }, 2000);
      }
    }
  }
);
