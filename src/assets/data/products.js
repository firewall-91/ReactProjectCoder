/*En este archivo al que he llamado product.js, he declarado una constante con un array de productos, el cual a la vez estoy exportando con la palabra reservada "export" de esa manera podré importarla desde el componente que así lo requiera
*/
export const arrayProducts = [
    {
        id: 1,
        name:'Guitarra Fender Telecaster',
        category:'instrumentos',
        stock: 5,
        price: 790 ,
        img:'https://media.guitarcenter.com/is/image/MMGS7/L73155000001000-00-2000x2000.jpg',
        description:'Para los músicos que desean el estilo y el sonido de la época dorada de Fender, hemos creado la Telecaster Vintera 50. Equipada con las codiciadas características que definieron la década, incluido el perfil del mástil, la sensación al tocarla y junto con las pastillas, la guitarra tiene todo el mordiente y toque que hizo de la Telecaster una leyenda. Para un tono auténtico de estilo vintage, recreamos nuestro conjunto favorito de pastillas Telecaster de los años 50',
        tipo: ['guitarra '],
    },
    {
        id: 2,
        name:'Guitarra electroacustica Taylor',
        category:'instrumentos',
        stock: 3,
        price: 1350,
        img:'https://maneimport.com/wp-content/uploads/2021/10/GS-Mini-e1-1.jpg',
        description:'Hay algo indudablemente atractivo en el tamaño reducido de la Taylor GS Mini-e Rosewood, pero un solo rasgueo revela la impresionante voz de una guitarra de tamaño completo.',
        tipo: ['guitarra '],
    },
    {
        id: 3,
        name:'Guitarra Gibson Les Paul',
        category:'instrumentos',
        stock: 4,
        price: 850 ,
        img:'https://www.mrcdinstrumentos.com.mx/shared/productos/22389/LPCS00EBNH1.jpg',
        description:'La Gibson Les Paul ™ Classic combina el modelo Les Paul de principios de los 60 con algunas modificaciones funcionales y probadas por el tiempo. Como era de esperar, el LP Classic está elaborado con un fondo de caoba y una tapa de arce junto con un cuello de caoba delgada y cónica y un diapasón de palisandro encuadernado.',
        tipo: ['guitarra '],
    },
    {
        id: 4,
        name:'Bajo Squier Affinity',
        category:'instrumentos',
        stock: 7,
        price: 949 ,
        img:'https://gorilagames.com/img/Public/1019-producto-nba-2k22-ps4-3847.jpg',
        description:'El Affinity Series™ Jazz Bass® V (de cinco cuerdas) es una versión de gran valor y precio accesible del mundialmente famoso Fender® Jazz Bass®. Con su conocida y admirada estética y el sonido pero en un precio reducido. Resulta ideal para el bajista moderno que busca un mayor registro de frecuencias graves, los puntos fuertes de este bajo son su growling y las potentes pastillas Jazz Bass V.',
        tipo: ['bajo '],
    },

    {
        id: 5,
        name:'Batería Acústica Pearl',
        category:'instrumentos',
        stock: 6,
        price: 1100,
        img:'https://www.musictanstore.com/wp-content/uploads/2022/03/pearl-roadshow.jpg',
        description:'Obtenga todo lo que necesita para comenzar a tocar la batería en un paquete completo con el juego de batería de 5 piezas Pearl’s Roadshow. Formados a partir de múltiples capas de madera dura adherida, los cascos de tambor Roadshow cuentan con cascos de álamo de 9 capas para un tono óptimo, moldeados para fabricar una cámara de resonancia que se proyecta con fuerza cuando golpeas el parche. ',
        tipo: ['percusion'],
    },

    {
        id: 6,
        name:'Encordado Folk Daddario Xs X-light 10/47',
        category:'accesorios',
        stock: 10,
        price: 29,
        img:'Las cuerdas DAddario XS Acoustic Phosphor Bronze combinan nuestra aleación acústica más popular con nuestra tecnología de recubrimiento de cuerdas más avanzada, lo que da como resultado un tono claro, una sensación suave y una estabilidad de afinación superior, todo con la mayor vida útil posible de la cuerda.',
        tipo: ['cuerda '],
    },
        
]
        