import "./item.scss";



function Item({content}) {
    const {name, universe, alterego, occupation, friends, superpowers, url, info} = content;
    return <div className="item">
        <h2>Имя: {name}</h2>
        <p>Вселенная: {universe}</p>
        <p>Альтерэго: {alterego}</p>
        <p>Род занятий: {occupation}</p>
        <p>Друзья: {friends}</p>
        <p>Суперсила: {superpowers}</p>
        <img src={url} alt="фото" />
        <p>{info}</p>
    </div>;
}

export default Item ;

