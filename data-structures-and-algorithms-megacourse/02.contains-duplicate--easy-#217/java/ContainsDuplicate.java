package java;

import java.util.HashSet;

public class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> mySet = new HashSet<>();
        for (int num : nums) {
            if (mySet.contains(num)) {
                return true;
            }
            mySet.add(num);
        }
        return false;
    }
}