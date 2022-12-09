package cars.service;

import cars.entity.CarEntity;
import cars.repository.CarRepository;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
  @Autowired
  CarRepository repository;

  public List<CarEntity> getAllCars(){
    return (List<CarEntity>) repository.findAll();
  }

  public void saveCar(CarEntity car){
    repository.save(car);
  }

  public void updateCar(Long id, CarEntity car){
    CarEntity currentCar = repository.findById(id).get();
    currentCar.setProducer(car.getProducer());
    currentCar.setPrice(car.getPrice());
    currentCar.setHorsepower(car.getHorsepower());
    currentCar.setImage_uri(car.getImage_uri());
    repository.save(currentCar);
  }

  public void deleteCar(Long id){
    repository.deleteById(id);
  }

  public Optional<CarEntity> getCarById(Long id){
    return repository.findById(id);
  }

  public List<CarEntity> getSortedCars(String sortingParameter, String sortingOrder){
    List<CarEntity> currentList = this.getAllCars();
    if(sortingParameter.equals("price")){
      if(sortingOrder.equals("asc")){
        currentList.sort(Comparator.comparing(CarEntity::getPrice));
      }
      else if(sortingOrder.equals("desc")) {
        currentList.sort(Comparator.comparing(CarEntity::getPrice).reversed());
      }
    } else if (sortingParameter.equals("horsepower")){
      if(sortingOrder.equals("asc")){
        currentList.sort(Comparator.comparing(CarEntity::getHorsepower));
      } else if (sortingOrder.equals("desc")){
        currentList.sort(Comparator.comparing(CarEntity::getHorsepower).reversed());
      }
    }
    return currentList;
  }
}
