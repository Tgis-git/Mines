var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Minesites_1_UTM_1 = new ol.format.GeoJSON();
var features_Minesites_1_UTM_1 = format_Minesites_1_UTM_1.readFeatures(json_Minesites_1_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minesites_1_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minesites_1_UTM_1.addFeatures(features_Minesites_1_UTM_1);
var lyr_Minesites_1_UTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minesites_1_UTM_1, 
                style: style_Minesites_1_UTM_1,
                popuplayertitle: 'Minesites_1_UTM',
                interactive: true,
                title: '<img src="styles/legend/Minesites_1_UTM_1.png" /> Minesites_1_UTM'
            });
var format_Minesites_1_Buffer__2 = new ol.format.GeoJSON();
var features_Minesites_1_Buffer__2 = format_Minesites_1_Buffer__2.readFeatures(json_Minesites_1_Buffer__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minesites_1_Buffer__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minesites_1_Buffer__2.addFeatures(features_Minesites_1_Buffer__2);
var lyr_Minesites_1_Buffer__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minesites_1_Buffer__2, 
                style: style_Minesites_1_Buffer__2,
                popuplayertitle: 'Minesites_1_Buffer_',
                interactive: true,
                title: '<img src="styles/legend/Minesites_1_Buffer__2.png" /> Minesites_1_Buffer_'
            });
var format_3x3KmGrid_3 = new ol.format.GeoJSON();
var features_3x3KmGrid_3 = format_3x3KmGrid_3.readFeatures(json_3x3KmGrid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3x3KmGrid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3x3KmGrid_3.addFeatures(features_3x3KmGrid_3);
var lyr_3x3KmGrid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3x3KmGrid_3, 
                style: style_3x3KmGrid_3,
                popuplayertitle: '3x3KmGrid',
                interactive: true,
                title: '<img src="styles/legend/3x3KmGrid_3.png" /> 3x3KmGrid'
            });
var format_5x5KmGrid_4 = new ol.format.GeoJSON();
var features_5x5KmGrid_4 = format_5x5KmGrid_4.readFeatures(json_5x5KmGrid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5x5KmGrid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5x5KmGrid_4.addFeatures(features_5x5KmGrid_4);
var lyr_5x5KmGrid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5x5KmGrid_4, 
                style: style_5x5KmGrid_4,
                popuplayertitle: '5x5KmGrid',
                interactive: true,
                title: '<img src="styles/legend/5x5KmGrid_4.png" /> 5x5KmGrid'
            });
var format_NarayanPoshi_mine_5 = new ol.format.GeoJSON();
var features_NarayanPoshi_mine_5 = format_NarayanPoshi_mine_5.readFeatures(json_NarayanPoshi_mine_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NarayanPoshi_mine_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NarayanPoshi_mine_5.addFeatures(features_NarayanPoshi_mine_5);
var lyr_NarayanPoshi_mine_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NarayanPoshi_mine_5, 
                style: style_NarayanPoshi_mine_5,
                popuplayertitle: 'NarayanPoshi_mine',
                interactive: true,
                title: '<img src="styles/legend/NarayanPoshi_mine_5.png" /> NarayanPoshi_mine'
            });
var format_Ubbalagundi_mine_6 = new ol.format.GeoJSON();
var features_Ubbalagundi_mine_6 = format_Ubbalagundi_mine_6.readFeatures(json_Ubbalagundi_mine_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ubbalagundi_mine_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ubbalagundi_mine_6.addFeatures(features_Ubbalagundi_mine_6);
var lyr_Ubbalagundi_mine_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ubbalagundi_mine_6, 
                style: style_Ubbalagundi_mine_6,
                popuplayertitle: 'Ubbalagundi_mine',
                interactive: true,
                title: '<img src="styles/legend/Ubbalagundi_mine_6.png" /> Ubbalagundi_mine'
            });
var format_Tunga_mine_7 = new ol.format.GeoJSON();
var features_Tunga_mine_7 = format_Tunga_mine_7.readFeatures(json_Tunga_mine_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tunga_mine_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tunga_mine_7.addFeatures(features_Tunga_mine_7);
var lyr_Tunga_mine_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tunga_mine_7, 
                style: style_Tunga_mine_7,
                popuplayertitle: 'Tunga_mine',
                interactive: true,
                title: '<img src="styles/legend/Tunga_mine_7.png" /> Tunga_mine'
            });
var format_Dharman_mine_8 = new ol.format.GeoJSON();
var features_Dharman_mine_8 = format_Dharman_mine_8.readFeatures(json_Dharman_mine_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dharman_mine_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dharman_mine_8.addFeatures(features_Dharman_mine_8);
var lyr_Dharman_mine_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dharman_mine_8, 
                style: style_Dharman_mine_8,
                popuplayertitle: 'Dharman_mine',
                interactive: true,
                title: '<img src="styles/legend/Dharman_mine_8.png" /> Dharman_mine'
            });
var format_Bhomman_mine_9 = new ol.format.GeoJSON();
var features_Bhomman_mine_9 = format_Bhomman_mine_9.readFeatures(json_Bhomman_mine_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bhomman_mine_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bhomman_mine_9.addFeatures(features_Bhomman_mine_9);
var lyr_Bhomman_mine_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bhomman_mine_9, 
                style: style_Bhomman_mine_9,
                popuplayertitle: 'Bhomman_mine',
                interactive: true,
                title: '<img src="styles/legend/Bhomman_mine_9.png" /> Bhomman_mine'
            });
var format_Narayana_mine_Forest_10 = new ol.format.GeoJSON();
var features_Narayana_mine_Forest_10 = format_Narayana_mine_Forest_10.readFeatures(json_Narayana_mine_Forest_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narayana_mine_Forest_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narayana_mine_Forest_10.addFeatures(features_Narayana_mine_Forest_10);
var lyr_Narayana_mine_Forest_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Narayana_mine_Forest_10, 
                style: style_Narayana_mine_Forest_10,
                popuplayertitle: 'Narayana_mine_Forest',
                interactive: true,
                title: '<img src="styles/legend/Narayana_mine_Forest_10.png" /> Narayana_mine_Forest'
            });
var format_Narayana_mine_Revenue_11 = new ol.format.GeoJSON();
var features_Narayana_mine_Revenue_11 = format_Narayana_mine_Revenue_11.readFeatures(json_Narayana_mine_Revenue_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narayana_mine_Revenue_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narayana_mine_Revenue_11.addFeatures(features_Narayana_mine_Revenue_11);
var lyr_Narayana_mine_Revenue_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Narayana_mine_Revenue_11, 
                style: style_Narayana_mine_Revenue_11,
                popuplayertitle: 'Narayana_mine_Revenue',
                interactive: true,
                title: '<img src="styles/legend/Narayana_mine_Revenue_11.png" /> Narayana_mine_Revenue'
            });
var format_Devadari_Mine_12 = new ol.format.GeoJSON();
var features_Devadari_Mine_12 = format_Devadari_Mine_12.readFeatures(json_Devadari_Mine_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Devadari_Mine_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Devadari_Mine_12.addFeatures(features_Devadari_Mine_12);
var lyr_Devadari_Mine_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Devadari_Mine_12, 
                style: style_Devadari_Mine_12,
                popuplayertitle: 'Devadari_Mine',
                interactive: false,
                title: '<img src="styles/legend/Devadari_Mine_12.png" /> Devadari_Mine'
            });
var format_Nandi_Mine_13 = new ol.format.GeoJSON();
var features_Nandi_Mine_13 = format_Nandi_Mine_13.readFeatures(json_Nandi_Mine_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nandi_Mine_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nandi_Mine_13.addFeatures(features_Nandi_Mine_13);
var lyr_Nandi_Mine_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nandi_Mine_13, 
                style: style_Nandi_Mine_13,
                popuplayertitle: 'Nandi_Mine',
                interactive: false,
                title: '<img src="styles/legend/Nandi_Mine_13.png" /> Nandi_Mine'
            });
var format_Bhadra_Mine_14 = new ol.format.GeoJSON();
var features_Bhadra_Mine_14 = format_Bhadra_Mine_14.readFeatures(json_Bhadra_Mine_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bhadra_Mine_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bhadra_Mine_14.addFeatures(features_Bhadra_Mine_14);
var lyr_Bhadra_Mine_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bhadra_Mine_14, 
                style: style_Bhadra_Mine_14,
                popuplayertitle: 'Bhadra_Mine',
                interactive: false,
                title: '<img src="styles/legend/Bhadra_Mine_14.png" /> Bhadra_Mine'
            });
var format_Rama_Mine_15 = new ol.format.GeoJSON();
var features_Rama_Mine_15 = format_Rama_Mine_15.readFeatures(json_Rama_Mine_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rama_Mine_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rama_Mine_15.addFeatures(features_Rama_Mine_15);
var lyr_Rama_Mine_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rama_Mine_15, 
                style: style_Rama_Mine_15,
                popuplayertitle: 'Rama_Mine',
                interactive: false,
                title: '<img src="styles/legend/Rama_Mine_15.png" /> Rama_Mine'
            });
var group_Mines = new ol.layer.Group({
                                layers: [lyr_NarayanPoshi_mine_5,lyr_Ubbalagundi_mine_6,lyr_Tunga_mine_7,lyr_Dharman_mine_8,lyr_Bhomman_mine_9,lyr_Narayana_mine_Forest_10,lyr_Narayana_mine_Revenue_11,lyr_Devadari_Mine_12,lyr_Nandi_Mine_13,lyr_Bhadra_Mine_14,lyr_Rama_Mine_15,],
                                fold: "open",
                                title: 'Mines'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Minesites_1_UTM_1.setVisible(true);lyr_Minesites_1_Buffer__2.setVisible(true);lyr_3x3KmGrid_3.setVisible(true);lyr_5x5KmGrid_4.setVisible(true);lyr_NarayanPoshi_mine_5.setVisible(true);lyr_Ubbalagundi_mine_6.setVisible(true);lyr_Tunga_mine_7.setVisible(true);lyr_Dharman_mine_8.setVisible(true);lyr_Bhomman_mine_9.setVisible(true);lyr_Narayana_mine_Forest_10.setVisible(true);lyr_Narayana_mine_Revenue_11.setVisible(true);lyr_Devadari_Mine_12.setVisible(true);lyr_Nandi_Mine_13.setVisible(true);lyr_Bhadra_Mine_14.setVisible(true);lyr_Rama_Mine_15.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Minesites_1_UTM_1,lyr_Minesites_1_Buffer__2,lyr_3x3KmGrid_3,lyr_5x5KmGrid_4,group_Mines];
lyr_Minesites_1_UTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', });
lyr_Minesites_1_Buffer__2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'layer': 'layer', 'path': 'path', 'area_ha': 'area_ha', });
lyr_3x3KmGrid_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_5x5KmGrid_4.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_NarayanPoshi_mine_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area': 'area', });
lyr_Ubbalagundi_mine_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tunga_mine_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dharman_mine_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bhomman_mine_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Narayana_mine_Forest_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Narayana_mine_Revenue_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Devadari_Mine_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Nandi_Mine_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bhadra_Mine_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rama_Mine_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Minesites_1_UTM_1.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descript_1': '', 'altitude_1': '', 'snippet': '', 'layer': '', 'path': '', });
lyr_Minesites_1_Buffer__2.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'layer': '', 'path': '', 'area_ha': '', });
lyr_3x3KmGrid_3.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_5x5KmGrid_4.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_NarayanPoshi_mine_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'area': 'TextEdit', });
lyr_Ubbalagundi_mine_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Tunga_mine_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Dharman_mine_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Bhomman_mine_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Narayana_mine_Forest_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Narayana_mine_Revenue_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Devadari_Mine_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Nandi_Mine_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Bhadra_Mine_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Rama_Mine_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Minesites_1_UTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descript_1': 'no label', 'altitude_1': 'no label', 'snippet': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Minesites_1_Buffer__2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'layer': 'no label', 'path': 'no label', 'area_ha': 'no label', });
lyr_3x3KmGrid_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_5x5KmGrid_4.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_NarayanPoshi_mine_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'area': 'no label', });
lyr_Ubbalagundi_mine_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Tunga_mine_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Dharman_mine_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bhomman_mine_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Narayana_mine_Forest_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Narayana_mine_Revenue_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Devadari_Mine_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Nandi_Mine_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bhadra_Mine_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Rama_Mine_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Rama_Mine_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});