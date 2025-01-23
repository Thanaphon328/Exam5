ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11127684.763501, 1400078.081172, 11128856.837376, 1400763.617906]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_rmutr_2 = new ol.format.GeoJSON();
var features_rmutr_2 = format_rmutr_2.readFeatures(json_rmutr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rmutr_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rmutr_2.addFeatures(features_rmutr_2);
var lyr_rmutr_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rmutr_2, 
                style: style_rmutr_2,
                popuplayertitle: 'rmutr',
                interactive: true,
                title: '<img src="styles/legend/rmutr_2.png" /> rmutr'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_rmutr_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_rmutr_2];
lyr_rmutr_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_rmutr_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_rmutr_2.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', });
lyr_rmutr_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});