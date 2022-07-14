// src\utils\map.js
import "leaflet/dist/leaflet.css";
import $L from "leaflet";
// 引入 leaflet.markercluster
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster";
// 解決默認 maker 無法顯示的問題
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = $L.icon({
iconUrl: icon,
shadowUrl: iconShadow
});
$L.Marker.prototype.options.icon = DefaultIcon;

const createMakerCluster = () => {
  return $L.markerClusterGroup();
  };