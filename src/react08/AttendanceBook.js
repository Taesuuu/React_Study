import React from 'react';

class AttendanceBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students : [
                {id : 1, name : 'Mike'},
                {id : 2, name : 'Jane'},
                {id : 3,name : 'Taesu'}
            ]
        }
    }

    render() {
        var {students} = this.state;
        // const studentList = students.map((student) =>
        //     <li key = {student.id}>
        //         {student.name}
        //     </li>
        // );

        return (
            <ul>
                {students.map((student) =>
                    <li key = {student.id}>
                         {student.name}
                     </li>
                )}
            </ul>
        )
    }
}

export default  AttendanceBook;