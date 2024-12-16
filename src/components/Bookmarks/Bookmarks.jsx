import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
            <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks => <Bookmark key={bookmarks.id} bookmarks={bookmarks} ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.PropTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;
