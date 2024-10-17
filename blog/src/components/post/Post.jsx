import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW-o8IOW_st3Hk0hESC7PMOTTdG5VQ44tvg&s"
            alt=""
        />
      <div className="postInfo">
        <div classname="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr />
            <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt voluptate eius, eligendi autem voluptatum iste. Ipsam enim alias quo adipisci iure quod rerum repellat dolor laborum distinctio, vitae quas.</p>
    </div>
  )
}
