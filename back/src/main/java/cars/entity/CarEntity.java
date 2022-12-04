package cars.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "car")
public class CarEntity {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String producer;

  @Column
  private double price;

  @Column
  private int horsepower;

  @Column(length = 2000)
  private String image_uri;

public String getProducer() {
	return producer;
}

public void setProducer(String producer2) {
	producer = producer2;
	
}

public double getPrice() {
	return price;
}

public void setPrice(double price2) {
	price = price2;	
}

public int getHorsepower() {
	return horsepower;
}

public void setHorsepower(int horsepower2) {
	horsepower = horsepower2;	
}

public String getImage_uri() {
	return image_uri;
}

public void setImage_uri(String image_uri2) {
	image_uri = image_uri2;	
}

}
