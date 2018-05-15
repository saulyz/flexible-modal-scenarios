export default {
    name: 'gmap',
    template: `
        <div>
            <gmap-map 
                :zoom="10" 
                :center="{lat: 54.897222, lng: 23.886111}"
                style="width: 100px, height: 100%"
            >
                <gmap-marker 
                    :position="{lat: 54.897222, lng: 23.886111}"
                ></gmap-marker>
            </gmap-map>
        </div>
    `,

}
