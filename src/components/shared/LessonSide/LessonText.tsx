import '../../../styles/LessonSide.scss';

type LessonTextType = {
    id: string;
    text: string;
}

interface LessonTextProps {
    text_array: LessonTextType[];
}


function LessonText({text_array} : LessonTextProps): JSX.Element {
    const list = text_array.map(body => <div id={body.id}>{body.text}</div>);
     return<div>{list}</div>;
}

export default LessonText