import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../assets/Profile2.jpg';
import avatar2 from '../../assets/IMG_0113.jpg';
import avatar3 from '../../assets/Profile.png';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');
    const [currentImage, setCurrentImage] = useState(avatar3);
    const [currentImage2, setCurrentImage2] = useState(avatar1); // New state for second image

    // Array of different texts
    const textOptions = [
        'okay that hurt a little but its okay',
        'ow, um hi?',
        'yea i get it you like to hit me lets move on now',
        'please dont get stuck here',
        'omg there is more to this portfolio then punching the dev in the face',
        'this is getting to be annoying',
        'help!!!!'
    ];

    useEffect(() => {
        // Handle random text generation when the text box is rendered
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        // Toggle the image when clicked
        
    };

    const handleImage2Click = () => {
        // Toggle the second image when clicked
        
    };

    useEffect(() => {
        // Display "Hi Nice To Meet You" on the first click
        if (showTextBox && randomText === '' && textOptions.length > 0) {
            setRandomText('Hi Nice To Meet You');
        }
    }, [showTextBox, randomText, textOptions]);

    return (
        <div className="about-container" id="about-me">
            <div className="dot-container">
                {/* sets random colors for each cycle */}
                {Array.from({ length: 150 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>

            {/* actual about me component */}
            <div className="container text-center mt-5">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                <p className='personal-title'>"ตอนนี้ผมกำลังเรียนอยู่ในระดับมัธยมปลาย และกำลังมองหา มหาวิทยาลัย ที่เปิดสอนเกี่ยวกับ คณะ เทคโนโลยีสารสนเทศ"</p>
                <p className='about-me'>
                ผมชอบเขียนโปรแกรมเพราะมันช่วยให้ผมแก้ปัญหาได้อย่างสร้างสรรค์ การเรียนรู้การเขียนโค้ดทำให้ผมเห็นถึงความเป็นไปได้ที่ไม่มีที่สิ้นสุด ผมอยากพัฒนาทักษะนี้ต่อ และเชื่อว่าการเรียนในคณะ เทคโนโลยีสารสนเทศ จะช่วยให้ผมบรรลุเป้าหมายของผมได้📍
                </p>

                <div className="mt-3 social-links-container">
                    <a className="social-links" href="https://www.linkedin.com/in/peyton-touma-b666a7281/">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://github.com/pToum21">
                        <FontAwesomeIcon icon={faGithub} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://discordapp.com/users/775148641014775808">
                        <FontAwesomeIcon icon={faDiscord} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://discordapp.com/users/775148641014775808">
                        <FontAwesomeIcon icon={faFacebook} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://discordapp.com/users/775148641014775808">
                        <FontAwesomeIcon icon={faTwitter} className="fa-1x socail-icons" />
                    </a>
                </div>

                {/* First Avatar image with click event */}
                <img
                    src={currentImage}
                    alt="avatar image"
                    className="rounded-circle img-fluid mt-5 swipe-image"
                    style={{
                        width: '220px',
                        height: '220px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 4s infinite linear',
                    }}
                    onClick={handleImageClick}
                />

                {/* Second Avatar image with click event */}
                <img
                    src={currentImage2}
                    alt="second avatar image"
                    className="rounded-circle img-fluid mt-5 swipe-image"
                    style={{
                        width: '220px',
                        height: '220px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        marginLeft: '20px', // Adds space between the two images
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 5s infinite linear',
                    }}
                    onClick={handleImage2Click}
                />

                {/* Render text box conditionally */}
                {showTextBox && (
                    <div className="text-box cartoon-bubble">
                        <p>{randomText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
