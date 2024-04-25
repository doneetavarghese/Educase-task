import React from 'react'

function Account() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 my-4">
          <h2>Account Settings</h2>
          <div className="row" style={{ borderBottom: '1px dotted black'}} >
            <div className="col-lg-3 my-5">
              <img style={{borderRadius:"50px,50px,50px",width:'70px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWadtIqhaxTu8WKhDNUzoZMNsv7oSqiQUuA7S8eMfPYQ&s" alt=""  />
              </div>
            <div className="col-lg-5 my-5" >
              <h6 style={{fontWeight:'bold'}}>Marry Doe</h6>
              <p>Marry@gmail.com</p>
            </div>
            <p>We promise a user-friendly interface and a website that is compatible across all the platforms. Educase is the best school management software for a reason!.Educase’s personalized school app is a sure way to manage your school like a star! </p>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
      
      </div>
  )
}

export default Account