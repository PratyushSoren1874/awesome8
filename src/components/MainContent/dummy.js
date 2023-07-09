import React, { Component } from 'react';
import './MainContent.css';
import { Avatar, Grid } from '@mui/material';
import verify from '../../images/verify.png';
import user2 from '../../images/user2.png';
import user1 from '../../images/user1.png';
import clothes_image from '../../images/clothes_image.jpg';
import like from '../../images/like.png';
import comment from '../../images/comment.png';
import save from '../../images/save.png';
import more from '../../images/more.png';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
                <div className='post_container'>

                    <div className='post_container'>
                        <Avatar className = 'user2' src = {user2}/>
                        <div className='post_username'>안녕 나 응애 <img className= 'verify' src={verify} width="15px"/> <div classname='days' >1일전</div> </div>
                        <div className='height'>165cm <div className='weight'>53kg</div></div>
                    </div>
                    <Grid>
                        <button className='Follow'>팔로우</button>
                    </Grid>
                    <br></br>
                    <div>
                        <h3>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</h3>
                    </div>
                    <div classname='container'>
                        <p> 지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어? </p>
                        <p> 후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? </p>
                        <p> 올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~! </p>
                    </div>
                    <div>
                    <tag> #2023 </tag>
                    <tag> #TODAYISMONDAY </tag>
                    <tag> #TOP </tag>
                    <tag> #POPS! </tag>
                    <tag> #WOW </tag>
                    <tag> #ROW </tag>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <img src={clothes_image} width="400px"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <img src={like} width="30px"/>
                        <img src={comment} width="30px"/>
                        <img src={save} width="30px"/>
                        <img src={more} width="30px"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <Avatar className = 'user2' src = {user2}/>
                    </div>
                    <div className='post_username'> 안녕 나 응애 <img className= 'verify' src={verify} width="15px"/> <span>1일전</span> <img className='more' src= {more}/> </div>
                    <br></br>
                    <div className='container'>
                        <p> 어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~! </p>
                    </div>
                    <div>
                        <img src={like} width="30px"/>
                        <img src={comment} width="30px"/>

                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <Avatar className = 'user1' src = {user1}/>
                    </div>
                    <div className='post_username'> 안녕 나 응애 <span>1일전</span> <img className='more' src= {more}/> </div>
                    <div>
                        <p> 오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다 </p>
                    </div>
                    <div>
                        <img src={like} width="30px"/>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                    {/* function Post({ user, postImage, likes, timestamp }) {

    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people. */}
                    </div>
                </div>
        );
    }
}

export default MainContent;