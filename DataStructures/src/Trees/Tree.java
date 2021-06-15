package Trees;

public class Tree {

    TreeNode root;
    public int searchCount;

    public Tree() {
    }

    public void add(Object o) {
        if (root == null) {
            root = new TreeNode(o);
        } else {
            add(o, root);
        }
    }

    public void add(Object o, TreeNode temp) {
        Comparable c = (Comparable) o;

        //Left side of branches
        if (c.compareTo(temp.getData()) < 0) {
            if (temp.left == null) {
                temp.left = new TreeNode(o);
            } else {
                add(o, temp.left);
            }
        }

        //Right side of branches
        if (c.compareTo(temp.getData()) >= 0) {
            if (temp.right == null) {
                temp.right = new TreeNode(o);
            } else {
                add(o, temp.right);
            }
        }
    }

    public void print() {
        if (root != null) {
            print(root);
        }
    }

    public void print(TreeNode temp) {
        if (temp.left != null) {
            //keep printing til theres no left node 
            print(temp.left);
        }
        System.out.println(temp.getData());
        if (temp.right != null) {
            //keep printing til theres no right node 
            print(temp.right);
        }
    }

    public Object search(Object o) {
        return search(o, root);
    }

    private Object search(Object o, TreeNode temp) {
        searchCount++;
        Comparable c = (Comparable) o;
        if (c.compareTo(temp.getData()) == 0) {
            return temp.getData();
        } else if (c.compareTo(temp.getData()) < 0 && temp.left != null) {
            return search(o, temp.left);
        } else if (c.compareTo(temp.getData()) > 0 && temp.right != null) {
            return search(o, temp.right);

        } else {
            return null;
        }
    }

    //Feeder method to accept object argument n from driver
    public Object findMax() {
        if (root!=null){
            return findMax(root);
        }
        else {
            return null;
        }
    }

    //Method to recursively search through tree and assign max
    public Object findMax(TreeNode temp) {

        if (temp == null) {
            return Integer.MIN_VALUE;
        }
        Object max = temp.getData();
        if (temp.right != null) {
            max = findMax(temp.right);
        }
        return max;
    }

//Localised class declaration 
    class TreeNode {

        public TreeNode left;
        public TreeNode right;

        private Object data;

        public TreeNode() {
        }

        public TreeNode(Object data) {
            this.data = data;
        }

        public Object getData() {
            return data;
        }

        public void setData(Object data) {
            this.data = data;
        }
    }
}
