document.querySelector('.oke').addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log('Button clicked'); // Kiểm tra sự kiện click
    
    // Lấy giá trị từ các trường input
    const email = document.querySelector('input[type="email"]').value;
    const timeFrom = document.querySelector('input[name="10h30"]').value;
    const timeTo = document.querySelector('input[name="24h"]').value;
    const feedback = document.querySelector('textarea[name="gópýhong"]').value;
    
    console.log('Form data:', { email, timeFrom, timeTo, feedback }); // Kiểm tra dữ liệu form
    
    // Lấy lựa chọn sự kiện
    const eventChoices = document.querySelectorAll('input[name="event_choice"]:checked');
    const selectedEvents = Array.from(eventChoices).map(choice => choice.value).join(', ') || 'Không có lựa chọn';
    
    console.log('Selected events:', selectedEvents); // Kiểm tra sự kiện được chọn

    // Gửi email qua EmailJS
    emailjs.send("service_9ssbzte", "template_ktvic95", {
        email: email,
        time_from: timeFrom,
        time_to: timeTo,
        selected_events: selectedEvents,
        feedback: feedback
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text); // Kiểm tra phản hồi thành công
        alert('Cảm ơn bạn đã gửi thông tin nhaaaaaa!');
        // Reset các trường input
        document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => input.value = '');
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    })
    .catch(error => {
        console.error('FAILED...', error); // Kiểm tra chi tiết lỗi
        alert('Có lỗi xảy ra, vui lòng thử lại!');
    });
});