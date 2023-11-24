ymaps.ready(function () {
    var map = new ymaps.Map('map', {
            center: [55.76001699344121,37.614238554747374],
            zoom: 14,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        objectMarker = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [55.76963601332982,37.636710499999985]
                }
            },
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/map-marker.png',
                // Размеры метки.
                iconImageSize: [12, 12],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0]
            },
            {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon',
                // Метку можно перемещать.
                draggable: true
            })

    map.geoObjects
        .add(objectMarker);
    map.behaviors.disable('scrollZoom');
});