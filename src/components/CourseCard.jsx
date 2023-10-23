import authorImg from '/authorImg.jpg'
import { BsPerson, BsClock, BsBook, BsCameraVideo} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineStar} from "react-icons/ai";



const DiscountCard = ({course}) => {
  const {authorName, classNumber, courseName, discountPercentage, imgUrl, lessonNumber, rating, studentNumber, videoDuration
  } = course;
 console.log(course);
  return (
    <div className="w-[18rem] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={imgUrl}
          alt="Card Image"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 left-2 border bg-white text-yellow-400 p-2 rounded-full">
          <AiOutlineHeart/>
        </div>
        <div className="absolute bottom-2 right-2 text-base font-semibold bg-white text-yellow-400 py-1 px-3 rounded">
          {discountPercentage}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src={authorImg} // Replace with author image URL
            alt="Author"
            className="w-12 h-12 rounded-full border border-green-400"
          />
          <span className="ml-2 font-semibold">{authorName}</span>
          <div className="ml-auto flex items-center gap-2">
            <AiOutlineStar className='text-yellow-400 font-bold text-xl'/>
            <p className='text-base'>{rating}</p>
          </div>
        </div>
        <h4 className="text-base font-bold mb-8 mt-5">{courseName}</h4>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <BsBook className='text-gray-500'/>
              <p className='text-base text-gray-500'>{lessonNumber} Lesson</p>
            </div>
            <div className='flex items-center gap-2'>
              <BsPerson className='text-gray-500'/>
              <p className='text-base text-gray-500'>{studentNumber} Students</p>
            </div>
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <BsClock className='text-gray-500'/>
              <p className='text-base text-gray-500'>{videoDuration} hr</p>
            </div>
            <div className='flex items-center gap-2'>
              <BsCameraVideo className='text-gray-500'/>
              <p className='text-base text-gray-500'>{classNumber} Lectures</p>
            </div>
        </div>
        <button className="w-full bg-[#4EC468] text-white py-1 rounded mt-5">
            Add to cart
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
