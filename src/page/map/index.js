import React, { useEffect } from 'react'
import './index.css'

function customMap() {
    useEffect(() => {
        requestMarker()
    })
    const requestMarker = () => {
        let AMap = window.AMap
        let map = new AMap.Map('allmap', {
            zoom: 18,
        })

        let marker = new AMap.Marker({
            position: [116.39, 39.9]
        })
        map.add(marker)
    }
    return (
        <div style={{ textAlign: 'center' }} >
            <div id="allmap" className="mapContainer" ></div>
        </div>
    )
}

export default customMap