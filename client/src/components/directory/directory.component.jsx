import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style.css';

const categories = [
    {
      id: 1,
      title: "Torino",
      imageUrl: "https://www.guidatorino.com/wp-content/uploads/2021/05/cosa-vedere-torino.jpg",
      route: "biglietteria/Torino"
    },
    {
      id: 2,
      title: "Milano",
      imageUrl: "https://static.open.online/wp-content/uploads/2020/03/MILANO-TAG.jpg",
      route: "biglietteria/Milano"
    },
    {
      id: 3,
      title: "Roma",
      route: "biglietteria/Roma",
      imageUrl: "https://www.fulltravel.it/wp-content/uploads/2019/11/Cosa-vedere-a-Roma.jpg"
    },
    {
      id: 4,
      title: "Pisa",
      route: "biglietteria/Pisa",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqy4bNceeo5kgbz57qmRNaH0bMn-wx5TJKhw&usqp=CAU"
    },
    {
      id: 5,
      title: "Trieste",
      route: "biglietteria/Trieste",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9ZQ7fljRftgzXffcwP-7LIoedkdqzMWkLg&usqp=CAU"
    },
    {
        id: 6,
        title: "Napoli",
        route: "biglietteria/Napoli",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcVRw46BTuyXu9u9K_cwbwui_Rtw-VEy3dQ&usqp=CAU"
      },
  ];

const Directory = () => {
    return(
        <div className='directory-container' >
            {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
        </div>
    )
}

export default Directory;