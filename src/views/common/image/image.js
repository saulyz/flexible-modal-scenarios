export default {
    name: 'image-simple',
    template: '<img :src="`/img/${name}`" :alt="title"/>',

    props: ['name', 'title']
}
