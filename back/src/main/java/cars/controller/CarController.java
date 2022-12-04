package cars.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import cars.service.CarService;
import cars.entity.CarEntity;


@RestController
@RequestMapping(path = "/cars")
public class CarController {

    @Autowired
    CarService service;

    public CarController(CarService service) {
        this.service = service;
    }


    @CrossOrigin
    @GetMapping
    public List<CarEntity> getAllCars() {
        return service.getAllCars();
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public Optional<CarEntity> getCarById(@PathVariable("id") Long id) {
        return service.getCarById(id);
    }

    @CrossOrigin
    @GetMapping(path = "/sortingParameter/{sortingParameter}/sortingOrder/{sortingOrder}")
    public List<CarEntity> getSortedCars(@PathVariable("sortingParameter") String sortingParameter,
        @PathVariable("sortingOrder") String sortingOrder) {
        return service.getSortedCars(sortingParameter, sortingOrder);
    }

    @CrossOrigin
    @PostMapping
    public void saveCar(@RequestBody CarEntity car) {
        service.saveCar(car);
    }

    @CrossOrigin
    @PutMapping(path = "/{id}")
    public void updateCar(@RequestBody CarEntity car, @PathVariable("id") Long id) {
        service.updateCar(id, car);
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public void deleteCar(@PathVariable("id") Long id) {
        service.deleteCar(id);
    }
}
