
import {FaCheck,FaTimes} from 'react-icons/fa';



function Message(props){
    return       <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
        <h6 class="card-price text-center">{props.price}<span class="period">{props.period}</span></h6>
      <hr></hr>
        <ul class="fa-ul">
          <li><span class="fa-li"><FaCheck class="fas fa-check"></FaCheck></span> {props.fa1}</li>
          <li><span class="fa-li"><FaCheck class="fas fa-check"></FaCheck></span> {props.fa2}</li>
          <li><span class="fa-li"><FaCheck class="fas fa-check"></FaCheck></span> {props.fa3}</li>
          <li><span class="fa-li"><FaCheck class="fas fa-check"></FaCheck></span> {props.fa4}</li>
          <li class="text-muted"><span class="fa-li"><FaTimes class="fas fa-times"></FaTimes></span> {props.fa5}</li>
          <li class="text-muted"><span class="fa-li"><FaTimes class="fas fa-times"></FaTimes></span> {props.fa6}</li>
          <li class="text-muted"><span class="fa-li"><FaTimes class="fas fa-times"></FaTimes></span> {props.fa7}
          </li>
          <li class="text-muted"><span class="fa-li"><FaTimes class="fas fa-times"></FaTimes></span> {props.fa8}</li>
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}
export default Message;
