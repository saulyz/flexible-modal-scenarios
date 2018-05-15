export default {
    name: 'general-info',
    template: `
        <div>
            <span v-html="content"></span>
        </div>
    `,

    props: ['content']
}
