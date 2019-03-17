<?php

class Generate
{
	public function __construct(int $length)
	{
      $this -> length = $length;
  	} 

	function GeneratePassword () 
	{
		$pass = "";
		for($i = 0; $i < $this -> length; $i++) 
		{
			$pass .= chr(rand(34,126));
		}
		echo " $pass ";
	}
}

$length = $_GET['howLong'];

$generate = new Generate ($length);
$generate -> GeneratePassword ($length);


?>