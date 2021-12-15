import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from '../CardInput/CardInput'
import { useThemeContext } from '../../context/themeContext'
import { Link, useNavigate } from 'react-router-dom'

const PrintMapPoints = ({ cards, select }) => {
  console.log(cards)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLightTheme, setTheme } = useThemeContext()
  const user = useSelector((state) => {
    return state.user
  })

  let [addr, setAddr] = useState('')
  const [category, setCategory] = useState()
  const [cardsData, setCardsData] = useState([])
  const categoryes = useSelector((state) => state.categoryes)
  // console.log(categoryes)
  // const cardsData = cards.map((item)=>{
  //   console.log(item)
  //   // return { "type": "Feature", "id": item.id, "geometry": { "type": "Point", "coordinates": [55.831903, 37.411961] }, "properties": { "balloonContent": `${item.title}`, "clusterCaption": `${item.title}`, "hintContent": `${item.title}`, "iconCaption": `${item.title}` }, "options": { "preset": "islands#blueCircleDotIconWithCaption" } }
  // })
  // console.log(cardsData)
  const data = {
    "type": "FeatureCollection",
    "features": [
      { "type": "Feature", "id": 0, "geometry": { "type": "Point", "coordinates": [55.831903, 37.411961] }, "properties": { "balloonContent": "Аптека", "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Аптека" }, "options": { "preset": "islands#blueCircleDotIconWithCaption" } },
      
    ]
  }

  const a = '5ae2e3f221c38a28845f05b6e94dd44c91ceac03cdfc62d2a58e3808';
  
  

  

  
  let ymaps = window.ymaps;
  let myMap;
  let myPlacemark;
  let adress
  
  let dataCategory = []
  useEffect(() => {
      dataCategory = [...categoryes]
  }, [categoryes])

  useEffect(()=>{
    setTimeout(()=>{
      ymaps.ready(init);
    },300)
  },[])
  
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
      objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.

        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 64,
        // Макет метки кластера pieChart.
        clusterIconLayout: "default#pieChart"
      });
    myMap.geoObjects.add(objectManager);

    // Создадим 5 пунктов выпадающего списка.
    
    var listBoxItems = dataCategory
      .map(function (title) {
        return new ymaps.control.ListBoxItem({
          data: {
            content: title.title
          },
          state: {
            selected: true
          }
        })
      }),
      reducer = function (filters, filter) {
        filters[filter.data.get('content')] = filter.isSelected();
        return filters;
      },
      // Теперь создадим список, содержащий 5 пунктов.
      listBoxControl = new ymaps.control.ListBox({
        data: {
          content: 'Фильтр',
          title: 'Фильтр'
        },
        items: listBoxItems,
        state: {
          // Признак, развернут ли список.
          expanded: true,
          filters: listBoxItems.reduce(reducer, {})
        }
      });
    myMap.controls.add(listBoxControl);

    // Добавим отслеживание изменения признака, выбран ли пункт списка.
    listBoxControl.events.add(['select', 'deselect'], function (e) {
      var listBoxItem = e.get('target');
      var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
      filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
      listBoxControl.state.set('filters', filters);
    });

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function (filters) {
      // Применим фильтр.
      objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories) {
      return function (obj) {
        var content = obj.properties.balloonContent;
        return categories[content]
      }
    }

    objectManager.add(data);
    
  }
  
  return (
    <div id="map" style={{ width: '95%', margin: '0 auto', height: "500px", marginBottom: '100px' }}></div>
  )
};

export default PrintMapPoints
