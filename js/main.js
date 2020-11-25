const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",

    onEnd: () => {
        console.log('Se Inserto un elemento');
    },

    group: "lista-personas",
    store: {
        set: (sortable) => {
            const orden = sortable.toArray();
            console.log(orden);
            localStorage.setItem(sortable.options.group.name, orden.join('-'));
        },
        // obtenemos el orden de la lista
        get: (sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            console.log(orden);
            return orden ? orden.split('-') : [];
        }
    }
});