import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-14 space-y-3'>
            <img className='w-full rounded-xl mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-xl' onClick={ () => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl mb-2 font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx} className='pr-3'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={ ()=>handleMarkAsRead(id,reading_time)} className='underline text-purple-800 font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead :PropTypes.func.isRequired
}

export default Blog;