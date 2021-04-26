package Widget;

public class Widget implements Comparable {
    
    private int id;
    private float weight;
    private float cost;

    public Widget(int id, float weight, float cost) {
        this.id = id;
        this.weight = weight;
        this.cost = cost;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }
    
    public String toString() {
        return "ID: "+id+" Cost: "+cost+" Weight: "+weight;
    }
    
    public int compareTo(Object o){
        Widget w = (Widget)o;
        if(this.id > w.id){
            return 1;
        }
        else if (this.id < w.id){
            return -1;
        }
        else{
            return 0;
        }
    }
}