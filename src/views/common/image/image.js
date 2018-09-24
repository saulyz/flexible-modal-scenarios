export default {
    name: 'image',
    template: '<img :src="`/img/${name}`" :alt="title"/>',

    props: ['name', 'title']
}
