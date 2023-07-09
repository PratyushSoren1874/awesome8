import { Avatar, TextField } from "@mui/material";
import React  from "react";
import "./MainContent.css";
import clothes_image from '../../images/clothes_image.jpg';
import user2 from '../../images/user2.png';
import user1 from '../../images/user1.png';
import imagesmode from '../../images/imagesmode.png';
import verify from '../../images/verify.png';
import like from '../../images/like.png';
import comment from '../../images/comment.png';
import save from '../../images/save.png';
import more from '../../images/more.png';


function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }} className = 'user2' src={user2} >

          </Avatar>{" "}
          안녕 나 응애 • 
        </div>
        <div className="day__posted">
        <img className="verify__user" src={verify} alt="verify_user" />
        <span>1일전</span>
        </div>

        {/* <MoreHorizIcon /> */}
        <button className="button" >팔로우</button>
      </div>

      <span className="height"> 165cm </span>
        <span className="weight">. 53kg </span>
      
      <br></br>
      <div>
      <h3>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</h3>
      </div>

      <div classname='container'>
      <p> 지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어? </p>
      <p> 후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? </p>
      <p> 올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~! </p>
        </div>
        <br></br>

      <div className="post__tags">
                    <tag className="container__year" color="grey" > #2023 </tag>
                    <tag className="container__day"> #TODAYISMONDAY </tag>
                    <tag className="container__sortby"> #TOP </tag>
                    <tag className="container__style"> #POPS! </tag>
                    <tag className="container__text"> #WOW </tag>
                    <tag className="container__trend"> #ROW </tag>
                    </div>
                    <br></br>

      <div className="post__image">

        <img src={clothes_image} alt="postImage" />
      </div>

      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
        <img src={like} className="like" alt="like" />
        <span className="number__likes">5</span>
        <img src={comment} alt="comment" />
        <span className="number__comments">5</span>
        <img src={save} alt="save" />
        <img src={more} alt="more" />
          </div>
          
        </div>
      </div>
      <br></br>
      <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }} className = 'user2' src={user2} >

          </Avatar>{" "}
          안녕 나 응애 •
          <img className="verify__user_2" src={verify} alt="verify_user" />
          <span className="day__posted">1일전</span>
          <img className="more__icons" src={more} alt="more" />
      
        </div>
        
        <div classname='container'>

      <p> 어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~! </p>

        </div>
        <div className="post__iconsMain">
        <img src={like} className="like" alt="like" />
        <span className="number__likes">5</span>
        <img src={comment} alt="comment" />
        <span className="number__comments">5</span>
          </div>
          <br></br>
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }} className = 'user1' src={user1} >

          </Avatar>{" "}
          ㅇㅅㅇ • <span className="day__posted">1일전</span>
          <img className="more__icons2" src={more} alt="more" />
      
        </div>

        <div className="post__Text">
      <p> 오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다 </p>
        </div>
        <div className="post__iconsMain">
        <img src={like} className="like" alt="like" />
        <span className="number__likes">5</span>
          </div>
          <br></br>
          <br></br>
          <div className="text-box">
          <img src={imagesmode} alt="postImage"/>
          <TextField
          style={{ height:'100%' , width:'99%' }}
          label= "댓글을 남겨주세요."
          />
          <span className="register"> 등록 </span>
          </div>
    </div>
  );
}

export default Post;
