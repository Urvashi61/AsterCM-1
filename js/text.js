const doctors=[
    {
        img: './images/doctorimg.png',
        name: 'Dr. Vijay Agarwal',
        position: 'MD, MRCP, PhD,CCT',
        Consultant: 'Lead & Sr. Consultant - Medical Oncology & Haematology',
        description: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    },
    {
        img: './images/doctorimg.png',
        name: 'Dr. Vijay Agarwal',
        position: 'MD, MRCP, PhD,CCT',
        Consultant: 'Lead & Sr. Consultant - Medical Oncology & Haematology',
        description: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    }
];
const deficiencyBlocks=[
    {
        img: './images/ic1.png',
        content: 'Failure to thrive – not gaining weight and height as per the age norms'
    },
    {
        img: './images/ic2.png',
        content: 'Infections warranting multiple hospitalizations'
    },
    {
        img: './images/ic3.png',
        content: 'Requirement of intravenous antibiotics to clear infections'
    },
    {
        img: './images/ic4.png',
        content: '2 or more episodes of pneumonia'
    },
    {
        img: './images/ic6.png',
        content: 'Repeated episodes of diarrhea '
    },
    {
        img: './images/ic7.png',
        content: '2 or more episodes of sinus infections within a year '
    },
    {
        img: './images/ic8.png',
        content: '2 or more episodes of ear discharge'
    },
    {
        img: './images/ic9.png',
        content: 'Repeated skin infections'
    },
    {
        img: './images/ic10.png',
        content: 'Repeated abscess formation (liver abscess, brain abscess)'
    },
];
const testimonial=[
    {
        img: './images/testimonial-user.png',
        name: 'John Doe',
        pos: 'Softwere Engineer',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img: './images/testimonial-user.png',
        name: 'John Doe',
        pos: 'Softwere Engineer',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img: './images/testimonial-user.png',
        name: 'John Doe',
        pos: 'Softwere Engineer',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        img: './images/testimonial-user.png',
        name: 'John Doe',
        pos: 'Softwere Engineer',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
];
document.getElementById('doctorList1').innerHTML=`${doctors.map(function(doctorList){
    return `
    <div class="doctorListCol">
        <div class="img-block"><img src='${doctorList.img}'/></div>
        <div class="doctor-name"> ${doctorList.name}</div>
        <div class="doctor-pos">${doctorList.position}</div>
        <div class="doctor-pos pos2">${doctorList.Consultant}</div>
        <div class="doctor-desc">${doctorList.description}</div>
        <div class="button-block">
            <button class="secBtn">Know More</button>
        </div>
    </div>
    `
}).join('')}`;
document.getElementById('doctorList2').innerHTML=`${doctors.map(function(doctorList){
    return `
    <div class="doctorListCol">
        <div class="img-block"><img src='${doctorList.img}'/></div>
        <div class="doctor-name"> ${doctorList.name}</div>
        <div class="doctor-pos">${doctorList.position}</div>
        <div class="doctor-pos pos2">${doctorList.Consultant}</div>
        <div class="doctor-desc">${doctorList.description}</div>
        <div class="button-block">
            <button class="secBtn">Know More</button>
        </div>
    </div>
    `
}).join('')}`;

document.getElementById('deficiency-block').innerHTML=`${deficiencyBlocks.map(function(deficiencyBlocksList){
    return `
    <div class="col-lg-3 col-md-4  col-sm-6 dificieny-col flex-column " >
        <div class="dificieny-txt">
            <div class="icon-block"><img src='${deficiencyBlocksList.img}'/></div>
            <div class="icon-text">${deficiencyBlocksList.content}</div>
        </div>
    </div>
    `
}).join('')}`;

document.getElementById('testimonialSlider').innerHTML=`${testimonial.map(function(testimoniallist){
    return `
    <div class="testimonial-inner">
        <div class="testimonial-img-block">
            <div class="user-nameimg-block">
                <div class="testimonial-img">
                    <img src="${testimoniallist.img}" />
                </div>
                <div class="testimonial-user-name-block">
                    <div class="name">
                        ${testimoniallist.name}
                    </div>
                    <div class="position">
                        ${testimoniallist.pos}
                    </div>
                </div>
            </div>
            <div class="testimonial-desc">
             ${testimoniallist.desc}
            </div>
        </div>
    </div>
    `
}).join('')}`;