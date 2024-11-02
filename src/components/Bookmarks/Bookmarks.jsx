import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({booksmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mb-5 mx-5 mt-5">
            <div className='bg-teal-200 p-3 text-center rounded-md mb-3'>
                <h3 className="text-4xl mb-3">Reading Time : {readingTime} min</h3>
            </div>
            <div className=' bg-gray-100 py-3  rounded-md'>
            <h2 className="text-3xl mb-7 text-center mt-2">Bookmarked Blogs: {booksmarks.length}</h2>
            {
                booksmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    booksmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;