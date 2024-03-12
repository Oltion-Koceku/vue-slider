**Vue Slider**
===
- **Consegna:**
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
- **Bonus:**
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
4- al doppio click sullo slider cambia la direzione dell’autoplay

## Svolgimento:
1. collego VUE
2. creo un contatore
3. con un ciclo v-for stampiamo tutte le immagini
4. collego il contatore all'immagine
5. al click delle frecce aumentiamo o diminuiamo il counter
6. con un if quando il counter sara superiore alla lunghezza dell'array si resetta a zero
7. al click della thumb si attiva la colonnina
8. con il @click il counter diventa uguale all'index
9. auto play, usiamo un valore booleano con il loop colonnine
